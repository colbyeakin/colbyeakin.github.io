"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";


type ProjectCardProps = {
    title: string;
    subtitle: string;
    summary: string;
    details: React.ReactNode;
    tech: string;
    previewImage?: string;
    githubUrl?: string;
    liveUrl?: string;
    compact?: boolean;
};

export default function ProjectCard({
    title,
    subtitle,
    summary,
    details,
    tech,
    previewImage,
    githubUrl,
    liveUrl,
    compact = false,
}: ProjectCardProps) {
    const [expanded, setExpanded] = useState(false);
    const cardRef = useRef<HTMLElement | null>(null);


    useEffect(() => {
        if (!expanded || !cardRef.current) return;

        const prefersReducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        cardRef.current.scrollIntoView({
            behavior: prefersReducedMotion ? "auto" : "smooth",
            block: "start",
        });
    }, [expanded]);

    return (
        <article 
            ref={cardRef}
            className={`space-y-4 border border-divider rounded-md p-5 scroll-mt-32 ${compact ? "max-w-md" : "max-w-4xl"}`}
        >
            {/* Header Section */}
            <header>
                <h3 className="font-heading text-xl tracking-wide">
                    {title}
                </h3>
                <p className="text-text-secondary text-sm mt-1">
                    {subtitle}
                </p>
            </header>

            {/* Live Preview Section */}
            {previewImage && liveUrl && (
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group focus-ring block relative aspect-[16/10] overflow-hidden rounded border border-divider"
                >
                  <Image
                    src={previewImage}
                    alt={`${title} preview`}
                    fill
                    className="object-cover transistion-transform duration-300 group-hover:scale-[1.02]"
                    sizes="(min-width: 768px) 50vw 100vw"
                    priority={false}
                  />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />

                    {/* Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-black/40 group-hover:opacity-100">
                        <span className="text-xs tracking-widest uppercase text-white">
                            Launch Experience
                        </span>
                    </div>
                </a>
            )}
            
            {/* Summary (always visible) */}
            <p className="text-sm text-text-secondary leading relaxed">
                {summary}
            </p>

            {/* Expandable Content */}
            {expanded && (
                <div className="space-y-3 text-sm text-text-secondary leading-relaxed">
                    {details}
                </div>
            )}

            {/* Actions */}
            <div className="flex items-center justify-between pt-2">
                <button
                    onClick={() => setExpanded(!expanded)}
                    className="focus-ring text-sm text-accent hover:underline"                
                >
                    {expanded ? "Show less ↑" : "Read more →"}
                </button>

                <div className="flex gap-4 text-sm">
                    {liveUrl && (
                        <a
                        href={liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="focus-ring text-accent hover:underline"
                        >
                            Live →
                        </a>
                    )}
                    {githubUrl && (
                        <a
                        href={githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="focus-ring text-accent hover:underline"
                        >
                            Github →
                        </a>
                    )}
                </div>
            </div>

            {/* Footer Section */}
            <footer className="pt-2 text-xs tracking-widest uppercase text-text-secondary">
                {tech}
            </footer>
        </article>
    )
};