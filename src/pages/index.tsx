// pages/index.tsx
import { motion } from 'framer-motion'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { 
  CodeBracketIcon, 
  ServerIcon, 
  CloudIcon, 
  ChartBarIcon,
  AcademicCapIcon,
  BookOpenIcon,
  EnvelopeIcon,
  GlobeAltIcon
} from '@heroicons/react/24/solid'
import { GlobeAltIcon as GlobeOutlineIcon } from '@heroicons/react/24/outline'

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        delayChildren: 0.3,
        staggerChildren: 0.2 
      } 
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    }
  }

  const skills = [
    { 
      Icon: CodeBracketIcon, 
      title: "Languages", 
      description: "Java, JavaScript, TypeScript, HTML/CSS" 
    },
    { 
      Icon: ServerIcon, 
      title: "Frameworks", 
      description: "Spring Boot, Next.js, React, Node.js" 
    },
    { 
      Icon: CloudIcon, 
      title: "DevOps", 
      description: "Docker, Kubernetes, AWS, CI/CD" 
    },
    { 
      Icon: ChartBarIcon, 
      title: "Tools", 
      description: "Git, Kafka, Redis, Microservices" 
    }
  ]

  const projects = [
    {
      title: "WorkHub MicroConnect",
      description: "Microservices platform with Kafka and Redis",
      tech: ["Java", "Spring Boot", "Kafka", "Docker"],
      link: "https://github.com/RahulKumar035/WorkHub-MicroConnect",
      achievements: [
        "Reduced MySQL queries by 60% via Redis",
        "Processed 1.2K+ events/sec with Kafka",
        "100% unauthorized requests blocked"
      ]
    },
    {
      title: "Online Movie Ticket Booking",
      description: "React + Spring Boot application",
      tech: ["React", "Spring Boot", "AWS", "MySQL"],
      link: "https://github.com/RahulKumar035/Online-Movie-Ticket-Booking",
      achievements: [
        "User-friendly booking interface",
        "AWS deployment",
        "Global exception handling"
      ]
    }
  ]

  const certifications = [
    {
      name: "PG-DAC (CDAC)",
      issuer: "Sunbeam Institute of Technology",
      year: "2023",
      link: "https://drive.google.com/file/d/1R2GcTZ6E-QmfB4djQ9i7ShWq6tAsGVy7/view"
    },
    {
      name: "Postman API Expert",
      issuer: "Postman",
      year: "2023",
      link: "https://badgr.com/public/assertions/gO8Sui50RJeUDfGbAMi4kA?identity__email=nirajrahul1@gmail.com"
    }
  ]

  return (
    <div className="bg-gradient-to-br from-blue-50 to-green-50 min-h-screen">
      <Head>
        <title>Rahul Kumar | Full-Stack Developer</title>
        <meta name="description" content="Portfolio of Rahul Kumar - Full-Stack Developer & Cloud Native Architect" />
      </Head>

      <motion.main 
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="container mx-auto px-4 py-16"
      >
        {/* Hero Section */}
        <motion.section 
          variants={itemVariants}
          className="text-center mb-16 space-y-6"
        >
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="inline-block"
          >
            <Image 
              src="/images/profile.jpeg" 
              alt="Rahul Kumar" 
              width={250} 
              height={250} 
              className="rounded-full mx-auto mb-6 shadow-2xl border-4 border-blue-100"
            />
          </motion.div>

          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-500">
            Rahul Kumar
          </h1>
          
          <p className="text-2xl text-gray-700 font-medium">
            Full-Stack Developer | Java & React Specialist
          </p>

          <div className="flex justify-center space-x-6">
            <motion.a 
              href="https://www.linkedin.com/in/rahul-kumar-67086087/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
            >
              <GlobeAltIcon className="w-6 h-6 mr-2" />
              LinkedIn
            </motion.a>

            <motion.a 
              href="https://github.com/RahulKumar035"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="flex items-center text-gray-700 hover:text-gray-900 transition-colors"
            >
              <CodeBracketIcon className="w-6 h-6 mr-2" />
              GitHub
            </motion.a>

            <motion.a 
              href="https://leetcode.com/u/nirajrahul1/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="flex items-center text-orange-600 hover:text-orange-800 transition-colors"
            >
              <BookOpenIcon className="w-6 h-6 mr-2" />
              LeetCode
            </motion.a>
          </div>

          <div className="max-w-2xl mx-auto mt-8">
  <p className="text-lg text-gray-600 leading-relaxed">
    Full-Stack Developer with expertise in <span className="font-semibold text-blue-600">Java</span>, 
    <span className="font-semibold text-green-600"> Spring Boot</span>, and 
    <span className="font-semibold text-purple-600"> React.js</span>. Reduced database load by 60% using Redis, 
    improved latency by 30% via Kafka. Passionate about building secure, scalable applications with 
    microservices architecture.
  </p>
</div>
        </motion.section>

        {/* Education Section */}
        <motion.section 
          variants={itemVariants}
          className="mb-16 bg-white rounded-xl p-8 shadow-lg"
        >
          <h2 className="text-3xl font-bold mb-8 flex items-center">
            <AcademicCapIcon className="w-8 h-8 mr-2 text-blue-500" />
            Education
          </h2>

          <div className="space-y-6">
            <div className="border-l-4 border-blue-200 pl-4">
              <h3 className="text-xl font-semibold">PG-DAC (Advanced Computing)</h3>
              <p className="text-gray-600">Sunbeam Institute of Technology, CDAC</p>
              <p className="text-sm text-gray-500">Sep 2022 - Mar 2023 | 65.75%</p>
            </div>

            <div className="border-l-4 border-green-200 pl-4">
              <h3 className="text-xl font-semibold">B.Tech (Computer Science)</h3>
              <p className="text-gray-600">Rajiv Gandhi Proudyogiki Vishwavidyalaya</p>
              <p className="text-sm text-gray-500">Aug 2018 - Jun 2022 | 7.46/10 CGPA</p>
            </div>
          </div>
        </motion.section>

        {/* Certifications Section */}
        <motion.section 
          variants={itemVariants}
          className="mb-16 bg-white rounded-xl p-8 shadow-lg"
        >
          <h2 className="text-3xl font-bold mb-8 flex items-center">
            <BookOpenIcon className="w-8 h-8 mr-2 text-green-500" />
            Certifications
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <motion.div 
                key={index}
                whileHover={{ translateY: -5 }}
                className="p-6 border rounded-lg hover:shadow-md transition-shadow"
              >
                <a
  href={cert.link}
  target="_blank"
  rel="noopener noreferrer"
  className="hover:text-blue-600 transition-colors"
>
  <h3 className="text-lg font-semibold">{cert.name}</h3>
</a>
                <p className="text-gray-600 mt-2">{cert.issuer}</p>
                <p className="text-sm text-gray-500 mt-2">Completed: {cert.year}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Projects Section */}
<motion.section 
  variants={itemVariants}
  className="mb-16"
>
  <h2 className="text-4xl font-bold text-center mb-12 flex items-center justify-center">
    <ChartBarIcon className="w-8 h-8 mr-2 text-purple-500" />
    Featured Projects
  </h2>

  <div className="grid md:grid-cols-2 gap-8">
    {projects.map((project, index) => (
      <motion.div 
        key={index}
        variants={itemVariants}
        whileHover={{ scale: 1.02 }}
        className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all"
      >
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-bold text-gray-800">{project.title}</h3>
          <Link
            href={project.link}
            target="_blank"
            className="text-blue-600 hover:text-blue-800 flex items-center"
          >
            <GlobeAltIcon className="w-5 h-5 mr-1" />
            Demo
          </Link>
        </div>
        
        <p className="text-gray-600 mb-4">{project.description}</p>
        
        <div className="mb-4">
          <h4 className="font-semibold text-gray-800 mb-2">Achievements:</h4>
          <ul className="list-disc list-inside space-y-1">
            {project.achievements.map((achievement, i) => (
              <li key={i} className="text-gray-600">{achievement}</li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap gap-2 mt-4">
          {project.tech.map((tech, i) => (
            <span 
              key={i}
              className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>
    ))}
  </div>
</motion.section>
       {/* Contact Section */}
<motion.section 
  variants={itemVariants}
  className="mb-16 bg-white rounded-xl p-8 shadow-lg"
>
  <h2 className="text-4xl font-bold text-center mb-12 flex items-center justify-center">
    <EnvelopeIcon className="w-8 h-8 mr-2 text-red-500" />
    Get in Touch
  </h2>

  <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
    {/* Left Side - Contact Info */}
    <div className="space-y-6">
      <motion.div 
        whileHover={{ scale: 1.05 }}
        className="flex items-center p-4 rounded-lg bg-blue-50"
      >
        <EnvelopeIcon className="w-6 h-6 mr-4 text-blue-600" />
        <div>
          <h3 className="font-semibold text-gray-800">Email</h3>
          <a 
            href="mailto:nirajrahul1@gmail.com" 
            className="text-gray-600 hover:text-blue-600"
          >
            nirajrahul1@gmail.com
          </a>
        </div>
      </motion.div>

      <motion.div 
        whileHover={{ scale: 1.05 }}
        className="flex items-center p-4 rounded-lg bg-green-50"
      >
        <GlobeAltIcon className="w-6 h-6 mr-4 text-green-600" />
        <div>
          <h3 className="font-semibold text-gray-800">Location</h3>
          <p className="text-gray-600">Asansol, West Bengal, India</p>
        </div>
      </motion.div>

      {/* Social Links */}
      <div className="flex space-x-6 justify-center md:justify-start">
        <motion.a 
          href="https://linkedin.com/in/rahul-kumar-67086087/"
          target="_blank"
          whileHover={{ y: -5 }}
          className="p-2 rounded-full bg-blue-100 hover:bg-blue-200"
        >
          <GlobeAltIcon className="w-6 h-6 text-blue-600" />
        </motion.a>

        <motion.a 
          href="https://github.com/RahulKumar035"
          target="_blank"
          whileHover={{ y: -5 }}
          className="p-2 rounded-full bg-gray-100 hover:bg-gray-200"
        >
          <CodeBracketIcon className="w-6 h-6 text-gray-700" />
        </motion.a>

        <motion.a 
          href="https://leetcode.com/u/nirajrahul1/"
          target="_blank"
          whileHover={{ y: -5 }}
          className="p-2 rounded-full bg-orange-100 hover:bg-orange-200"
        >
          <BookOpenIcon className="w-6 h-6 text-orange-600" />
        </motion.a>
      </div>
    </div>

    {/* Right Side - Contact Form */}
    <form className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
        <input
          type="text"
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your name"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
        <input
          type="email"
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          placeholder="your@email.com"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
        <textarea
          rows={4}
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          placeholder="How can I help you?"
        ></textarea>
      </div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-full bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700"
      >
        Send Message
      </motion.button>
    </form>
  </div>
</motion.section>
      </motion.main>
    </div>
  )
}