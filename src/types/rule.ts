import { AddressableResource } from "./addressable-resource";

export type Rule = AddressableResource & {
  id: number;
  text: string;
  hint: string;
};

export function Rule({ id, text, hint }: Rule): Rule {
  return { id, text, hint, uri: `/api/v1/instance/rules/${id}` };
}

type RulesConstructor<T> = abstract new (...args: Rule[]) => T;

export type Rules = AddressableResource &
  Array<Rule> &
  RulesConstructor<RulesImpl>;

class RulesImpl extends Array<Rule> implements AddressableResource {
  uri: string = "/api/v1/instance/rules";

  constructor(...rules: Rule[]) {
    super(...rules);
  }
}

export function Rules(...rules: Rule[]): Rules {
  return new RulesImpl(...rules) as Rules;
}
