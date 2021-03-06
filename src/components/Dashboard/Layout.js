import React, { Component } from "react";
import styled from "styled-components";
import Sidebar from "./Sidebar";
import Content from "./Content";

const LayoutWrapper = styled.div`
  display: grid;
  grid-template-columns: 25vw auto;
  @media only screen and (min-width: 320px) and (max-width: 480px) {
    grid-template-columns: 1fr;
    .layout-first {
      display: none;
    }
  }
`;

export default class Layout extends Component {
  render() {
    return (
      <LayoutWrapper>
        <div className="layout-first">
          <Sidebar slug={this.props.slug} url={this.props.url}/>
        </div>
        <div className="layout-second">
          <Content slug={this.props.slug} url={this.props.url} title={this.props.title}/>
        </div>
      </LayoutWrapper>
    );
  }
}
