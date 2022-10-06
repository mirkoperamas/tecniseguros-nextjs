import { ActressesList } from "../organisms/ActressesList/ActressesList";
import { Background } from "../containers/Background/Background";

export const HomeView = ({ data }) => {
  // console.log(data);
  return (
    <Background>
      <ActressesList data={data} />
    </Background>
  );
};
