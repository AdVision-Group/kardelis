/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Header from "../header/header"
import Footer from '../footer/footer'

import HeaderProvider from '../../contexts/header/header.context'

import 'bootstrap/dist/css/bootstrap.min.css';
import "./layout.scss"

const Layout = ({ children }) => {
  return (
    <HeaderProvider>
      <Header />
      <main>{children}</main>
      <Footer />
    </HeaderProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
