import { AboutStyled } from "./styled-components/about.styled";
import SectionTitle from "../../components/SectionTitle";
import Triangle from "../../components/Triangle";

const About = () => {
	return (
		<AboutStyled>
			<div className="titleContainer">
				<SectionTitle title="About"></SectionTitle>
			</div>
			<div className="paragraphContainer">
				<div className="triangleContainer">
					<Triangle />
				</div>
				<p>
					Hello, my name is Marcos, and I am a self-taught front-end developer. Every day, I work on projects to
					reinforce my knowledge and improve my skills in HTML, CSS, and JavaScript. I am also a member of No-Country,
					where I am currently involved in a real work simulation within an interdisciplinary team consisting of
					front-end and back-end developers, testers, and UX/UI designers. This experience has allowed me to collaborate
					effectively with my colleagues and further develop my skills in a professional environment. I am now actively
					seeking my first professional experience in the IT industry to continue growing as a developer and contribute
					to innovative projects.
				</p>
			</div>
		</AboutStyled>
	);
};

export default About;
