export function ExampleBlock({
    title,
    children,
}: {
    title: string;
    children: React.ReactNode;
}) {
    return (
        <div className="space-y-3">
            <h4 className="font-medium">{title}</h4>
            <div className="flex gap-4 flex-wrap">{children}</div>
        </div>
    );
}
