/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { judegCase } from './judegCase';
import type { judgeConfig } from './judgeConfig';

export type QuestionQueryRequest = {
    answer?: string;
    content?: string;
    current?: number;
    id?: number;
    judegCase?: Array<judegCase>;
    judgeConfig?: judgeConfig;
    pageSize?: number;
    sortField?: string;
    sortOrder?: string;
    tags?: Array<string>;
    title?: string;
    userId?: number;
};
