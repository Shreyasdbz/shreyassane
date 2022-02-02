/** @format */

// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// Import custom schemas
import { siteText } from "./SiteText";
import { siteImage } from "./SiteImage";
import { project } from "./Project";
import { experience } from "./Experience";
import { photographyPhoto } from "./PhotographyPhoto";

import { technology } from "./Technology";

import { richText } from "./utils/richText";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    // Primary Schemas
    siteText,
    siteImage,
    project,
    experience,
    photographyPhoto,
    // Hybrid Schemas (Primary & Utils)
    technology,
    // Util Schemas
    richText,
  ]),
});
