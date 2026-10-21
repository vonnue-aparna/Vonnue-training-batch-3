import defineConfig from "vitest";

export default defineConfig({
    test: {
        environment: "jsdom",
        include: ["tests/**/*.test.ts"],
        exclude: ["dist/**"],
        
    }
});
