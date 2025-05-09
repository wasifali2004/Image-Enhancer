import React from 'react'
import { motion } from 'framer-motion'
import { FaQuoteLeft, FaStar } from 'react-icons/fa'

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Photographer',
    content: 'This image enhancer transformed my workflow. The quality improvement is incredible!',
    rating: 5,
    avatar: 'https://randomuser.me/api/portraits/women/32.jpg'
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Graphic Designer',
    content: 'I use it daily to enhance client images. The results always impress them.',
    rating: 4,
    avatar: 'https://randomuser.me/api/portraits/men/45.jpg'
  },
  {
    id: 3,
    name: 'Emma Williams',
    role: 'Social Media Manager',
    content: 'Our engagement rates improved significantly after using enhanced images from this tool.',
    rating: 5,
    avatar: 'https://randomuser.me/api/portraits/women/63.jpg'
  }
]

const Testimonial = () => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            What Our Users Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Trusted by professionals worldwide to enhance their visual content
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="mb-4 text-gray-600">
                <FaQuoteLeft className="text-gray-300 text-xl mb-2" />
                <p className="italic">{testimonial.content}</p>
              </div>
              
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <FaStar 
                    key={i} 
                    className={`text-${i < testimonial.rating ? 'yellow-400' : 'gray-300'} text-lg`}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonial