namespace A09_Ententeich {
    export let duckPaths: Path2D[];

    export let shapesDucks: number[][][] = [
        [
            [30, 1], [50, 15]
        ]
    ];

    export function createPaths(): void {
        let duckPaths: void = createDuckPaths(shapesDucks);
    }

    function createDuckPaths(_shapes: number[][][]): void {
        let paths: Path2D[] = [];
    }
}