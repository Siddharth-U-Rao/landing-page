import { Container } from "../shared/conainer"; 
import { Title } from "../shared/Title";

// Static image imports
import discord from '../../assets/logos/discord.png';
import openai from '../../assets/logos/openai.png';
import paypal from '../../assets/logos/paypal.png';
import slack from '../../assets/logos/slack.png';
import spotify from '../../assets/logos/spotify.png';
import uber from '../../assets/logos/uber.png';
import youtube from '../../assets/logos/youtube.png';

// Logo list
const logos = [
  "discord",
  "openai",
  "paypal",
  "slack",
  "spotify",
  "uber",
  "youtube"
];

const logoMap: Record<string, string> = {
  discord,
  openai,
  paypal,
  slack,
  spotify,
  uber,
  youtube
};

export const Brands = () => {
  return (
    <section>
      <Container className="space-y-8">
        <div className="text-center max-w-3xl mx-auto">
          <Title> Trusted by Industry Leaders </Title>
        </div>
        <div className="flex justify-center flex-wrap gap-4">
          {logos.map((logo) => (
            <div
              key={logo}
              className="p-4 sm:p-5 rounded-xl bg-body border border-box-border group"
            >
              <img
                src={logoMap[logo]}
                width="100"
                height="60"
                alt={logo}
                className="h-7 sm:h-10 w-auto ease-linear duration-300 grayscale group-hover:!grayscale-0 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
