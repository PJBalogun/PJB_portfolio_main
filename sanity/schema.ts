import { type SchemaTypeDefinition } from 'sanity'


import project from  "./schemaTypes/project"
import blockContent from "./schemaTypes/blockContent"

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [project, blockContent],
}
