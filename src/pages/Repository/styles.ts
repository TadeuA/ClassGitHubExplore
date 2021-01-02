import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: ${({ theme }) => theme.colors['gray-2']};
    transition: color 0.2s;
    &:hover {
      color: ${({ theme }) => theme.colors['gray-4']};
    }

    svg {
      margin-right: 4px;
    }
  }
`;

export const RepositoryInfo = styled.section`
  margin-top: 80px;

  header {
    display: flex;
    align-items: center;
    img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
    }

    div {
      margin-left: 24px;

      strong {
        color: ${({ theme }) => theme.colors['gray-1']};
      }

      p {
        font-size: 18px;
        color: ${({ theme }) => theme.colors['gray-5']};
        margin-top: 4px;
      }
    }
  }

  ul {
    display: flex;
    list-style: none;
    margin-top: 40px;

    li {
      & + li {
        margin-left: 80px;
      }
      strong {
        display: block;
        font-size: 36px;
        color: ${({ theme }) => theme.colors['gray-1']};
      }

      span {
        display: block;
        margin-top: 4px;
        color: ${({ theme }) => theme.colors['gray-6']};
      }
    }
  }
`;

export const Issues = styled.div`
  margin-top: 80px;

  a {
    background: ${({ theme }) => theme.colors.white};
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;

    display: flex;
    align-items: center;
    translate: transform 0.2s;

    & + a {
      margin-top: 16px;
    }

    &:hover {
      transform: translateX(10px);
    }

    div {
      margin-left: 0 16px;
      flex: 1;

      strong {
        font-size: 20px;
        color: ${({ theme }) => theme.colors['gray-1']};
      }
      p {
        font-size: 18px;
        color: ${({ theme }) => theme.colors['gray-2']};
        margin-top: 4px;
      }
    }
    svg {
      margin-left: auto;
      color: ${({ theme }) => theme.colors['gray-3']};
    }
  }
`;
