import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-6xl font-bold text-gray-900 mb-6">
            Mindful Journal
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Track your thoughts, log your moods, and discover patterns in your emotional journey with AI-powered insights.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              href="/dashboard"
              className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors font-semibold"
            >
              Start Journaling
            </Link>
            <Link
              href="/mood"
              className="border-2 border-indigo-600 text-indigo-600 px-8 py-3 rounded-lg hover:bg-indigo-50 transition-colors font-semibold"
            >
              Track Mood
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="text-indigo-600 text-2xl mb-3">📝</div>
              <h3 className="text-xl font-semibold mb-2">Daily Journaling</h3>
              <p className="text-gray-600">
                Capture your thoughts, experiences, and reflections in a private, secure space.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="text-indigo-600 text-2xl mb-3">😊</div>
              <h3 className="text-xl font-semibold mb-2">Mood Tracking</h3>
              <p className="text-gray-600">
                Log your daily emotions and see patterns in your mental well-being over time.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="text-indigo-600 text-2xl mb-3">🤖</div>
              <h3 className="text-xl font-semibold mb-2">AI Insights</h3>
              <p className="text-gray-600">
                Get personalized reflections and discover meaningful patterns in your journal entries.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
