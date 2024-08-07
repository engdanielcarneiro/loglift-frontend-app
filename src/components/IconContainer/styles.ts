import { HTMLAttributes } from "react";
import styled, { css } from "styled-components";

interface IconContainerProps extends HTMLAttributes<HTMLDivElement> {
  hoverColor?: string;
  color?: string;
  marginRight?: string;
  display?: string;
}

export const Container = styled.div<IconContainerProps>`
  cursor: pointer;
  ${({ color }) =>
    color
      ? css`
          color: ${color};
        `
      : "color: #4C5371 "};

  ${({ marginRight }) =>
    marginRight
      ? css`
          margin-right: ${marginRight};
        `
      : ""};
  ${({ display }) =>
    display
      ? css`
          display: ${display};
        `
      : ""};

  &:hover {
    ${({ hoverColor }) =>
      hoverColor
        ? css`
            color: ${hoverColor};
          `
        : "color: #070A20"}
  }
`;
