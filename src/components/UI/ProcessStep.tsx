"use client";

interface ProcessStepProps {
    step: number;
    title: string;
    description: string;
    isLast?: boolean;
}

export function ProcessStep({
    step,
    title,
    description,
    isLast = false,
}: ProcessStepProps) {
    return (
        <div className="group relative text-center">
            {/* Connector line */}
            {!isLast && (
                <div className="absolute left-1/2 top-12 hidden h-0.5 w-full bg-steel/10 lg:block" />
            )}

            {/* Step number */}
            <div className="relative mx-auto mb-6 flex h-24 w-24 items-center justify-center">
                {/* Outer ring */}
                <div className="absolute inset-0 rounded-full border-2 border-steel/10 transition-all duration-500 group-hover:border-brand-green group-hover:scale-110" />
                {/* Inner circle */}
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-brand-red to-brand-red-dark font-display text-2xl font-bold text-white shadow-lg transition-transform duration-300 group-hover:scale-110">
                    {step.toString().padStart(2, "0")}
                </div>
            </div>

            {/* Content */}
            <h3 className="mb-3 font-display text-xl font-bold text-steel-dark">{title}</h3>
            <p className="text-sm text-concrete-dark">{description}</p>
        </div>
    );
}
