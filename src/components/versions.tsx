import { InstanceVNext } from "../types/instance";
import VERSION from "../version";
import React from "react";

export default function Versions({ instance }: { instance: InstanceVNext }) {
    return (
        <div className="content-center my-4">
            <p className="text-sm">Mastodon version: {instance.version}</p>
            <p className="text-sm">
                Landing page version: {VERSION}
            </p>
        </div>
    );
}