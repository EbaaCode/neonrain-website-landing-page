"use client"

import { Calendar, Mail } from "lucide-react"

export default function ContactForm() {
	return (
		<section className="py-16">
			<div className="max-w-md mx-auto">
				<h2 className="text-3xl font-semibold mb-8 text-center tracking-tight">Contact Us</h2>
				<p className="text-center mb-8 font-light leading-relaxed">
					Ready to take the next step? Get in touch with us to discuss how we can help your business grow.
				</p>
				<div className="space-y-6">
					<a
						href="https://calendly.com/your-calendly-link"
						target="_blank"
						rel="noopener noreferrer"
						className="w-full bg-[#8038af] text-white font-medium py-3 px-4 rounded-xl flex items-center justify-center"
					>
						<Calendar className="w-5 h-5 mr-2" />
						Schedule a Meeting
					</a>
					<div className="relative">
						<div className="absolute inset-0 flex items-center">
							<div className="w-full border-t border-dashed border-gray-700"></div>
						</div>
						<div className="relative flex justify-center text-sm">
							<span className="px-2 bg-neutral-900 bg-opacity-50 text-white font-light">Or</span>
						</div>
					</div>
					<a
						href="mailto:contact@yourcompany.com"
						className="w-full bg-neutral-200 text-neutral-900 font-medium py-3 px-4 rounded-xl flex items-center justify-center"
					>
						Email Us
					</a>
				</div>
			</div>
		</section>
	)
}

