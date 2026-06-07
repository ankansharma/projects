import { Hono } from 'hono'
import { jsxRenderer } from 'hono/jsx-renderer'

const app = new Hono()

app.get(
  '*',
  jsxRenderer(({ children }) => {
    return (
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>My Test Site</title>
          <script src="https://cdn.tailwindcss.com"></script>
        </head>
        <body class="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-6">
          <main class="max-w-2xl w-full bg-white rounded-2xl shadow-xl p-10">
            <div class="flex items-center gap-5 mb-8">
              <div class="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-3xl font-bold shadow-lg">
                TS
              </div>
              <div>
                <h1 class="text-3xl font-bold text-slate-800">My Test Site</h1>
                <p class="text-slate-500 mt-1">A sample site built with Hono + Tailwind</p>
              </div>
            </div>

            <p class="text-slate-600 leading-relaxed mb-8">
              This is a sample site created to demonstrate Hono and
              Cloudflare Workers. You can customize it with your own
              content, style, and personality.
            </p>

            <div class="border-t border-slate-100 pt-6">
              <h2 class="text-lg font-semibold text-slate-700 mb-3">Links</h2>
              <div class="flex flex-wrap gap-3">
                <a href="#" class="px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-lg text-sm text-slate-700 transition-colors">
                  GitHub
                </a>
                <a href="#" class="px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-lg text-sm text-slate-700 transition-colors">
                  LinkedIn
                </a>
                <a href="#" class="px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-lg text-sm text-slate-700 transition-colors">
                  Blog
                </a>
              </div>
            </div>

            <p class="text-xs text-slate-400 mt-10 text-center">
              Built with Hono + Tailwind &middot; Deployed on Cloudflare Workers &middot; Experimental branch!
            </p>
          </main>
        </body>
      </html>
    )
  })
)

app.get('/', (c) => {
  return c.render(
    <div>
      {/* Content is rendered by the layout above */}
    </div>
  )
})

export default app
