import { ReactNode } from 'react';
import { VFC } from 'react';
import styled from 'styled-components';

type LayoutProps = {
  children: ReactNode;
};

export const Layout: VFC<LayoutProps> = ({ children }) => {
  return (
    <StyledLayout>
      <header>
        <h1>progressRec</h1>
      </header>
      <main>{children}</main>
      <footer>
        <small>
          2021<span>©</span>
          <a href='https://proglab.vercel.app/'>progLearning</a>
        </small>
      </footer>
    </StyledLayout>
  );
};

const StyledLayout = styled.div`
  > header {
    background-color: orange;
    padding: 8px 16px;
    h1 {
      color: white;
      font-size: 32px;
      font-weight: bold;
    }
  }
  > main {
    padding: 16px;
  }
  > footer {
    background-color: orange;
    text-align: center;
    padding: 4px 0;
    > small {
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
      > span {
        font-size: 28px;
        margin: 0 4px;
      }
      > a {
        text-decoration: underline;
      }
    }
  }
`;
