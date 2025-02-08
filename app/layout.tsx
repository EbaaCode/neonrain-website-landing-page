import "./globals.css"
import { Inter } from "next/font/google"
import type React from "react"

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
})

export const metadata = {
	title: "NeonRain - Empowering Gamers to Become Creators",
	description: "A platform offering modding solutions that empower gamers to integrate their own content into their favorite games, enhancing game longevity and creating new revenue streams.",
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en" className={`dark ${inter.variable}`}>
			<body className="bg-black font-sans">{children}</body>
		</html>
	)
}
