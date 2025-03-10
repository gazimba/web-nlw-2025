import Image from "next/image";
import { InviteLinkInput } from "./invite-link-input";
import { Ranking } from "./ranking";
import { Stats } from "./stats";

import logo from "../../../assets/logo.svg";

interface InvitePageProps {
	params: Promise<{
		subscribeId: string;
	}>;
}

export default async function InvitePage(props: InvitePageProps) {
	const { subscribeId } = await props.params;
	const inviteLink = `http://localhost:3333/invites/${subscribeId}`;
	return (
		<div className="min-h-dvh flex items-center justify-between gap-16 flex-col md:flex-row">
			<div className="flex flex-col gap-10 w-full max-w-[550px]">
				<Image src={logo} alt="devstage" width={108.5} height={30} />
				<div className="space-y-2">
					<h1 className="text-4xl font-semibold font-heading text-gray-100 leading-none">
						Inscrição Confirmada!
					</h1>
					<p className="text-gray-300">
						Para entrar no evento, acesse o link enviado para seu e-mail
					</p>
				</div>
				<div className="space-y-6">
					<div className="space-y-3">
						<h2 className="text-gray-200 text-xl font-heading font-semibold leading-none">
							Indique e ganhe
						</h2>
						<p className="text-gray-300">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
							natus quis laborum sunt placeat libero facere. Voluptatem omnis
							porro dicta inventore ullam, delectus eaque necessitatibus, quod
							similique fuga enim possimus?
						</p>
					</div>
					<InviteLinkInput inviteLink={inviteLink} />
					<Stats subscribeId={subscribeId}/>
				</div>
			</div>

			<Ranking />
		</div>
	);
}
