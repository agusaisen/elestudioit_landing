import { Sparkles } from "lucide-react"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black text-white overflow-hidden relative">
      {/* Animated background elements */}
      <div className="absolute w-full h-full overflow-hidden z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/3 right-1/4 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.png')] bg-repeat opacity-5 z-0"></div>

      <div className="container px-4 relative z-10">
        <div className="flex flex-col items-center justify-center text-center max-w-2xl mx-auto space-y-8">
          {/* Logo */}
          <div className="mb-6">
            <img src="/logo.png" alt="elestudio.it" className="h-12 md:h-16" />
          </div>

          {/* Main content */}
          <div className="space-y-6">
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-purple-500/40 bg-purple-500/10 text-purple-300 text-sm">
              <Sparkles className="h-4 w-4 mr-2" />
              <span>Sitio en construcción</span>
            </div>

            <h2 className="text-2xl md:text-4xl font-light">
              Estamos creando algo{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 font-medium">
                increíble
              </span>
            </h2>

            <p className="text-gray-400 text-lg md:text-xl max-w-lg mx-auto">
              Nuestro equipo está puliendo los últimos detalles para revelarte algo verdaderamente{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 font-medium">
                copado
              </span>
              . ¡La espera valdrá la pena!
            </p>

            <div className="pt-4">
              <a
                href="https://wa.me/542994768136?text=Hola%20elestudio.it"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full px-8 py-4 font-medium text-lg transition-all duration-200 hover:shadow-lg"
              >
                Contáctanos
              </a>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-16 text-gray-500">
            <p>© {new Date().getFullYear()} elestudio.it — Todos los derechos reservados</p>
          </div>
        </div>
      </div>
    </main>
  )
}
