import React from "react"
import renderer from "react-test-renderer"
import Second from "../../src/pages/page-2"

import * as Gatsby from 'gatsby';
const useStaticQuery = jest.spyOn(Gatsby, 'useStaticQuery');
useStaticQuery.mockImplementation(() => ({
  site: {
    siteMetadata: {
      title: 'My Title',
    },
  },
}));

describe("Second", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Second />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
