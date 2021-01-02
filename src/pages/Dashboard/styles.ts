import styled, { css } from 'styled-components';
import { shade } from 'polished';
import { FormProps } from './interfaces';

export const Title = styled.h1`
  font-size: 48px;
  color: ${({ theme }) => theme.colors['gray-0']};
  max-width: 450px;
  line-height: 56px;

  margin-top: 80px;
`;

export const Form = styled.form<FormProps>`
  margin-top: 40px;
  max-width: 700px;

  display: flex;
  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;
    color: ${({ theme }) => theme.colors['gray-0']};
    border: 2px solid ${({ theme }) => theme.colors.white};
    border-right: 0;
    ${({ hasError }) =>
      hasError &&
      css`
        border-color: ${({ theme }) => theme.colors['red-warning']};
      `}

    &::placeholder {
      color: ${({ theme }) => theme.colors['gray-1']};
    }
  }
  button {
    width: 210px;
    height: 70px;
    background: ${({ theme }) => theme.colors['green-success']};
    border-radius: 0 5px 5px 0;
    border: 0;
    color: ${({ theme }) => theme.colors.white};
    font-weight: bold;
    transition: background-color 0.2s;

    &:hover {
      background: ${(shade(0.2), ({ theme }) => theme.colors['green-success'])};
    }
  }
`;

export const Error = styled.span`
  display: block;
  color: ${({ theme }) => theme.colors['red-warning']};
  margin-top: 8px;
`;

export const Repositories = styled.div`
  margin-top: 80px;
  max-width: 700px;

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
    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
      margin-right: 6px;
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
