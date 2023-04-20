import { StyledFooter } from "./styled-components/footer.styled";

const Footer = () => {
	return (
		<StyledFooter>
			<ul>
				<li>
					<a
						href="https://drive.google.com/file/d/1yFYDAzgPD0NOrY5nNpV3uea_jMDkXOnd/view?usp=share_link"
						target="_blank">
						Download my CV
					</a>
				</li>
				<li>
					<a
						href="https://www.linkedin.com/in/marcos-octavio-martilotta-450a621a6/"
						target="_blank">
						LinkedIn
					</a>
				</li>
				<li>
					<a
						href="https://github.com/MarcosMartilotta"
						target="_blank">
						GitHub
					</a>
				</li>
			</ul>
		</StyledFooter>
	);
};

export default Footer;
