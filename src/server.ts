import express from "express";
import { nextApp, nextHandler } from "./next-utils";
import nextBuild from "next/dist/build";
import path from "path";
import { parse } from "url";

const app = express();
const PORT = Number(process.env.PORT) || 3000;

const start = async () => {
	if (process.env.NEXT_BUILD) {
		app.listen(PORT, async () => {
			// @ts-expect-error
			await nextBuild(path.join(__dirname, "../"));

			process.exit();
		});

		return;
	}

	// admin
	const adminRouter = express.Router();
	adminRouter.get("/", (req, res) => {
		if (false) {
			console.log("quaaaaaa1");
			return res.redirect("/");
		}
		console.log("quaaaaaa2");

		const parsedUrl = parse(req.url, true);
		const { query } = parsedUrl;

		return nextApp.render(req, res, "/admin", query);
	});
	app.use("/admin", adminRouter);

	app.use((req, res) => {
		nextHandler(req, res);
	});

	nextApp.prepare().then(() => {
		console.log("Next.js started");
		app.listen(PORT, async () => {
			console.info(`Next.js App URL: ${process.env.NEXT_PUBLIC_SERVER_URL}`);
		});
	});
};

start();
