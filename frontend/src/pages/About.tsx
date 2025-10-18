const About = () => {
  const team = [
    {
      name: 'Development Team',
      role: 'Frontend Development',
      description: 'Building modern, responsive user interfaces with React and TypeScript.',
    },
    {
      name: 'Design Team',
      role: 'UI/UX Design',
      description: 'Creating beautiful, intuitive user experiences with Tailwind CSS.',
    },
    {
      name: 'Backend Team',
      role: 'API Development',
      description: 'Ready to integrate with your backend services and APIs.',
    },
  ]

  const technologies = [
    { name: 'React', description: 'A JavaScript library for building user interfaces' },
    { name: 'TypeScript', description: 'Typed superset of JavaScript for better development experience' },
    { name: 'Tailwind CSS', description: 'Utility-first CSS framework for rapid UI development' },
    { name: 'Vite', description: 'Fast build tool and development server' },
    { name: 'React Router', description: 'Declarative routing for React applications' },
    { name: 'Headless UI', description: 'Unstyled, accessible UI components' },
  ]

  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-primary-600">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">
              About YourApp
            </h1>
            <p className="mt-4 text-xl text-primary-100 max-w-3xl mx-auto">
              A modern, scalable frontend application built with the latest technologies 
              and best practices, ready for backend integration.
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-primary-600 font-semibold tracking-wide uppercase">Mission</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Building the future of web applications
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              We're committed to creating modern, performant, and maintainable web applications 
              that provide exceptional user experiences while being easy to integrate with backend services.
            </p>
          </div>
        </div>
      </div>

      {/* Technologies Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-primary-600 font-semibold tracking-wide uppercase">Technologies</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Built with modern tools
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Our frontend is built using industry-standard technologies and best practices.
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {technologies.map((tech) => (
                <div key={tech.name} className="bg-white rounded-lg shadow p-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">{tech.name}</h3>
                  <p className="text-gray-600">{tech.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-primary-600 font-semibold tracking-wide uppercase">Team</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Meet our development approach
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Our team follows modern development practices and is ready to integrate with your backend.
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {team.map((member) => (
                <div key={member.name} className="text-center">
                  <div className="space-y-4">
                    <div className="mx-auto h-20 w-20 rounded-full bg-primary-100 flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary-600">
                        {member.name.charAt(0)}
                      </span>
                    </div>
                    <div className="space-y-2">
                      <div className="text-lg leading-6 font-medium">
                        <h3>{member.name}</h3>
                        <p className="text-primary-600">{member.role}</p>
                      </div>
                      <p className="text-gray-500">{member.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary-600">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to get started?</span>
            <span className="block text-primary-200">Integrate your backend today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-primary-600 bg-white hover:bg-primary-50"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
