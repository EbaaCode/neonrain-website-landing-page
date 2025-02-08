import Logo from "./components/Logo"
import Summary from "./components/Summary"
import ContactForm from "./components/ContactForm"

export default function LandingPage() {
	return (
		<div className="min-h-screen bg-black text-gray-100 relative overflow-hidden">
			<div className="absolute inset-0 w-full h-full">
				{/* Grid background */}
				<div className="absolute inset-0 grid grid-cols-[repeat(auto-fill,minmax(50px,1fr))] grid-rows-[repeat(auto-fill,minmax(50px,1fr))] opacity-[0.05]">
					{[...Array(400)].map((_, i) => (
						<div key={i} className="border-[0.5px] border-gray-900 dark:border-gray-700 aspect-square"></div>
					))}
				</div>

				{/* Gradient overlay to hide parts of the grid */}
				<div className="absolute inset-0 bg-gradient-radial from-transparent via-black to-black opacity-90"></div>

				{/* Accent color haze effect */}
				<div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#8038af] to-transparent opacity-[0.1]"></div>
			</div>

			<main className="container mx-auto px-4 py-8 relative">
				<Logo />
				<Summary />
				<ContactForm />
			</main>
		</div>
	)
}

