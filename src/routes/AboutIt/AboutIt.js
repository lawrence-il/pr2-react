import { useParams } from "react-router"

const AboutIt = () => (
    <h2>ID: {useParams().id}</h2>
)

export default AboutIt;