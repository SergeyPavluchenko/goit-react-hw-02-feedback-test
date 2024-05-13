import { Feedback } from './Feedback/Feedback';
import { GlobalStyled } from './GlobalStyled';
import { Layout } from './Layout/Layout';

export const App = () => {
  return (
    <Layout>
      <Feedback initualValue={0} />
      <GlobalStyled />
    </Layout>
  );
};
