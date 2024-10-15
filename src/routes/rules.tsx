import { useState, useEffect } from "react";
import { Rule } from "../types/rule";
import Loading from "../components/loading";
import fetch from "../lib/api-fetch";
import RulesComponent from "../components/rules";
import React from "react";

export default function RulesPage() {
  const [rules, setRules] = useState<Rule[]>([]);
  const [expanded, setExpanded] = useState<number>(-1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch<Rule[]>('/api/v1/instance/rules');
        if (response) {
          setRules(response);
        }
      } catch (error) {
        console.error("Error fetching rules data:", error);
      }
    };

    fetchData();
  }, []);

  const toggleExpanded = (index: number) => {
    setExpanded(expanded === index ? -1 : index);
  }

  return rules.length > 0 ? (
    <>
      <div>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-center">Our Rules</h2>
        <RulesComponent rules={rules} expanded={expanded} toggleExpanded={toggleExpanded} />
      </div>
    </>
  ) : (
    <Loading />
  );
}