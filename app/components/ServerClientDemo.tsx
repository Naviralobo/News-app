import ClientCounter from "./ClientCounter";

export default function ServerClientDemo() {
  const serverTime = new Date().toISOString();
  console.log("This console appears in terminal, not browser");

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">
        Server vs Client demo
      </h2>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="border border-green-200 rounded-lg p-4 bg-green-50">
          <h3 className="font-semibold text-green-800 mb-2">
            Server Component
          </h3>
          <p className="text-sm text-green-700 mb-2">
            This renders on the server at build or request time
          </p>
          <p className="text-xs text-green-600">Server Time:{serverTime}</p>
          <ul className="text-xs text-green-600 mt-2 space-y-1">
            <li>Great for seo</li>
            <li>Faster-initial load page</li>
            <li>can access server-only apis</li>
            <li>No interactivity</li>
          </ul>
        </div>

        <div className="border border-blue-200 rounded-lg p-4 bg-blue-50">
          <h3 className="font-semibold text-blue-800 mb-2">Client Componnet</h3>
          <p className="text-sm text-blue-700 mb-2">
            This renders in the browser and can be interactive as well
          </p>
          <ClientCounter />
          <ul className="text-xs text-blue-600 mt-2 space-y-1">
            <li>Interactive (useState, useEffect) </li>
            <li>Event Handlers</li>
            <li> Browse APIs</li>
            <li>Need 'use client'</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
