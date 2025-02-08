import "./globals.css"
import { Inter } from "next/font/google"
import type React from "react"

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
})

export const metadata = {
	title: "Your Company - Professional Solutions",
	description: "We deliver innovative solutions to help businesses thrive in the digital age.",
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
