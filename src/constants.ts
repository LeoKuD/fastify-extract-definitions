import { HTTPMethods } from 'fastify';

import { CachedSchemas } from './types';

export const rootName = 'API';

export const bannerComment = `
/**
 * This file was automatically generated by fastify-extract-definitions.
 * DO NOT MODIFY IT BY HAND. Instead, modify the fastify routes schemas
 * and re-run project to regenerate this file.
 */\n
`;

export const bannerImports = `import {
  ContextConfigDefault,
  FastifyInstance,
  FastifyLoggerInstance,
  FastifyRequest,
  FastifySchema,
  FastifyTypeProvider,
  FastifyTypeProviderDefault,
  RawReplyDefaultExpression,
  RawRequestDefaultExpression,
  RawServerBase,
  RawServerDefault,
} from 'fastify';
import { FastifyReply } from 'fastify/types/reply';
import { RouteGenericInterface } from 'fastify/types/route';
import {
  FastifyRequestType,
  ResolveFastifyRequestType,
} from 'fastify/types/type-provider';

export type RouteHandlerMethod<
  RawServer extends RawServerBase = RawServerDefault,
  RawRequest extends RawRequestDefaultExpression<RawServer> = RawRequestDefaultExpression<RawServer>,
  RawReply extends RawReplyDefaultExpression<RawServer> = RawReplyDefaultExpression<RawServer>,
  RouteGeneric extends RouteGenericInterface = RouteGenericInterface,
  ContextConfig = ContextConfigDefault,
  SchemaCompiler extends FastifySchema = FastifySchema,
  TypeProvider extends FastifyTypeProvider = FastifyTypeProviderDefault,
  RequestType extends FastifyRequestType = ResolveFastifyRequestType<
    TypeProvider,
    SchemaCompiler,
    RouteGeneric
  >,
  Logger extends FastifyLoggerInstance = FastifyLoggerInstance
> = (
  this: FastifyInstance<RawServer, RawRequest, RawReply, Logger, TypeProvider>,
  request: FastifyRequest<
    RouteGeneric,
    RawServer,
    RawRequest,
    SchemaCompiler,
    TypeProvider,
    ContextConfig,
    Logger,
    RequestType
  >,
  reply: FastifyReply<
    RawServer,
    RawRequest,
    RawReply,
    RouteGeneric,
    ContextConfig,
    SchemaCompiler,
    TypeProvider,
    RouteGeneric['Reply']
  >
) => Promise<RouteGeneric['Reply']> | RouteGeneric['Reply'] | void;

export type Handler<
  RouteGeneric extends RouteGenericInterface = RouteGenericInterface,
  ContextConfig = ContextConfigDefault
> = RouteHandlerMethod<
  RawServerDefault,
  RawRequestDefaultExpression,
  RawReplyDefaultExpression,
  RouteGeneric,
  ContextConfig
>;\n
`;

export const cachedMethods: Record<HTTPMethods, { capitalized: string }> = {
  DELETE: { capitalized: 'Delete' },
  GET: { capitalized: 'Get' },
  HEAD: { capitalized: 'Head' },
  OPTIONS: { capitalized: 'Options' },
  PATCH: { capitalized: 'Patch' },
  POST: { capitalized: 'Post' },
  PUT: { capitalized: 'Put' },
};

export const cachedSchemas: CachedSchemas = [
  { name: 'querystring', capitalized: 'Querystring' },
  { name: 'params', capitalized: 'Params' },
  { name: 'headers', capitalized: 'Headers' },
  { name: 'response', capitalized: 'Reply' },
];

export const cachedSchemasWithBody: CachedSchemas = [
  { name: 'body', capitalized: 'Body' },
  ...cachedSchemas,
];

export const methodsWithBody: HTTPMethods[] = ['POST', 'PUT', 'PATCH'];
