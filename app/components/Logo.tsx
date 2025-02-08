import Image from "next/image"

export default function Logo() {
	return (
		<div className="flex flex-col items-center justify-center py-8">
			<Image src="/neonrain-logo.svg" alt="Company Logo" width={300} height={150}  />
		</div>
	)
}

