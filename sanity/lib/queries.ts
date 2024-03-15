// ./sanity/lib/queries.ts

import { groq } from "next-sanity";

export const POSTS_QUERY = groq`*[_type == "project"]{
    projectId,
    name,
    tags,
    "posterImage": posterImage.asset->url,
    "description": description[].children[].text,
    redirect_url,
    github_url,
     featured,
}`;


export const POSTS_FEATURE_QUERY = groq`*[_type == "project  && featured == true]{
    projectId,
    name,
    tags,
    "posterImage": posterImage.asset->url,
    "description": description[].children[].text,
    redirect_url,
    github_url,
     featured,
}`;
