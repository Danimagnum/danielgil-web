import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  retainSearchParams,
  useRouterState,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import explorerCss from "../project-explorer.css?url";
import { useLanguage } from "@/lib/i18n";

function NotFoundComponent() {
  const { t, language } = useLanguage();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">
          {t("Página no encontrada", "Page not found")}
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          {t(
            "La página que buscas no existe o se ha movido.",
            "The page you are looking for does not exist or has moved.",
          )}
        </p>
        <div className="mt-6">
          <Link
            to="/"
            search={{ lang: language }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            {t("Volver al inicio", "Go home")}
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: unknown; reset: () => void }) {
  const { t, href } = useLanguage();
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          {t("No se ha podido cargar la página", "This page could not be loaded")}
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          {t(
            "Puedes volver a intentarlo o regresar al inicio.",
            "You can try again or return to the home page.",
          )}
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            {t("Reintentar", "Try again")}
          </button>
          <a
            href={href("/")}
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            {t("Volver al inicio", "Go home")}
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  validateSearch: (search: Record<string, unknown>): { lang?: "es" | "en"; project?: string } => ({
    lang: search.lang === "en" || search.lang === "es" ? search.lang : undefined,
    project: typeof search.project === "string" ? search.project : undefined,
  }),
  search: { middlewares: [retainSearchParams(["lang"])] },
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Daniel Gil · Impulso Digital" },
      {
        name: "description",
        content: "Desarrollo full stack, automatización e integración de datos.",
      },
      { name: "author", content: "Daniel Gil" },
      { property: "og:title", content: "Daniel Gil · Impulso Digital" },
      {
        property: "og:description",
        content: "Desarrollo full stack, automatización e integración de datos.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700&family=Instrument+Serif:ital@0;1&display=swap",
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "stylesheet", href: explorerCss },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  const language = useRouterState({ select: (state) => state.location.search.lang ?? "es" });
  return (
    <html lang={language}>
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
