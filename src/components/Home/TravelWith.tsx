import Container from "../common/Container";
import Image from "next/image";
import { Heading } from "../common/Heading";
export const TravelWith = () => {
  return (
    <Container>
      <div className="flex flex-col gap-10 items-center lg:flex-row">
        <Image src="/img/Travel.png" alt="Travel" width={400} height={400} />
        <div className="lg:max-w-[60%]">
          <Heading className="text-primary">
            TravelFun for modern travellers
          </Heading>

          <p className="text-primary">
            Our unique intinary builder gives you the power design your trip.
            Backed by a passionate team of travel experts and selected for you.{" "}
          </p>
        </div>
      </div>
    </Container>
  );
};
