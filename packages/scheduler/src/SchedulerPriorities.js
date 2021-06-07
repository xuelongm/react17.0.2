/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

export type PriorityLevel = 0 | 1 | 2 | 3 | 4 | 5;

// TODO: Use symbols?
// 没有优先级
export const NoPriority = 0;
// 立即执行的优先级，同步执行的优先级
export const ImmediatePriority = 1;
// 用户优先级，用户触发的优先级
export const UserBlockingPriority = 2;
// 正常优先级，比如：请求数据
export const NormalPriority = 3;
export const LowPriority = 4;
// 空闲优先级
export const IdlePriority = 5;
