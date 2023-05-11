import React from "react";
import styles from "./Pricing.module.scss";
import BoxPrice from "../../components/BoxPrice";
import Header from "../../components/Header/Header";

const pricing = [
	{
		name: "Bronze",
		about: "",
		title: "Branding on a budget",
		price: 299,
		subMenu: {
			toWinner: 135,
			validServisePrice: 39,
			entries: 300,
		},
		privilege: ["Matching .com URL"],
		partialRefund: false,
		color: "#e0b48d",
	},
	{
		name: "Gold",
		about: "",
		title: "Increase participation and basic brand validation",
		price: 449,
		subMenu: {
			toWinner: 200,
			validServisePrice: 305,
			entries: 600,
		},
		privilege: [
			"Matching .com URL",
			"Instant Trademark Check (One Database)",
			" NDA and More Privacy",
			"Project Promotion (Basic)",
			"Comprehensive Trademark Research",
		],
		partialRefund: true,
		color: "#e8b954",
	},
	{
		name: "Platinum",
		about: "",
		title: "Work with top-level creatives, plus agency-style brand validation",
		price: 749,
		subMenu: {
			toWinner: 300,
			validServisePrice: 979,
			entries: 1000,
		},
		privilege: [
			"Audience Testing (Up to 6 Names) View Sample Report",
			"Comprehensive Trademark Research (3 Names)",
			"Linguistics Analysis (3 Names)",
			"Tier A Creatives",
			"Matching .com URL",
			"Instant Trademark Check (4 Databases)",
			"NDA and More Privacy",
			"Enhanced Project Promotion",
			"Team Collaboration Tools",
		],
		partialRefund: true,
		color: "#555",
	},
	{
		name: "Managed",
		about: `Receive optimum results from your Platinum Contest by launching a Managed Contest Package and working one-on-one with an experienced Squadhelp Branding Consultant. With significantly more validation services, professional brief creation, and daily management of your contest by your Branding Expert, you'll receive an enhanced branding experience to closeout your branding project.Learn More about Managed Contest Service`,
		color: "#28d2d0",
		title: "A full agency experience without the agency price tag",
		price: 1499,
	},
];

function Pricing() {
	return (
		<div>
			<Header />
			<div className={styles["pricing-page"]}>
				<section className={styles["pricing-for"]}>
					<div className={styles.wrapper}>
						<p>Pricing For</p>
						<select name="contest_types">
							<option>Name</option>
							<option>Logo</option>
							<option>Tagline</option>
							<option>Name and logo</option>
							<option>Name and tagline</option>
							<option>Name, Tagline and Logo</option>
							<option>Name, Logo and Business Cards</option>
							<option>Logo and Business Cards</option>
							<option>Logo, Business Cards and Stationery</option>
							<option>Logo and Tagline</option>
							<option>Business Cards</option>
							<option>Stationery</option>
							<option>Product Feedback and Research</option>
						</select>
					</div>
					<img
						className={styles.image}
						src="https://i.vimeocdn.com/filter/overlay?src0=https%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F1451960391-27331ec81e39eb316fde7c35212ed6f1497510379d6f0a68a08f21f2c061fabc-d_1280x720&src1=https%3A%2F%2Ff.vimeocdn.com%2Fimages_v6%2Fshare%2Fplay_icon_overlay.png"
						alt=""
					/>
				</section>
				<main className={styles.main}>
					{pricing.map((m) => (
						<BoxPrice {...m} />
					))}
				</main>
				<section className={styles["get-started"]}>
					<p>All packages include the award amount <br/> for the winning creative and all fees and commissions.</p>
					<button>Get Started now</button>
				</section>
				<section className={styles["agency-block"]}></section>
			</div>
		</div>
	);
}

export default Pricing;

