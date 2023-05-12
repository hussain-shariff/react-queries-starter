import { useState, useEffect } from "react"

const SuperHeroesPage = () => {
	const [data, setdata] = useState<any>(null)
	const [isLoading, setIsLoading] = useState(true)
	const [error, setError] = useState("")

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((res) => res.json())
			.then((json) => {
				setdata(json)
				setIsLoading(false)
				setError("")
			})
			.catch((err) => setError(err))
	}, [])

	if (isLoading) return <h1>Loading...</h1>

	if (error) return <h1>{error}</h1>

	return (
		<div className=" p-10">
			<p>SuperHeroes Page</p>
			{data.map((user) => (
				<h1 key={user.id}>{user.name}</h1>
			))}
		</div>
	)
}

export default SuperHeroesPage
