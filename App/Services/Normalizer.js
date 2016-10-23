import { Schema, arrayOf, normalize } from 'normalizr'
import { camelizeKeys } from 'humps'

const normalizer = (data, schema) => {
  const camelizedJson = camelizeKeys(data)
  return normalize(camelizedJson, schema)
}
