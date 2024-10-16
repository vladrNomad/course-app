export type ContentType = "text" | "video" | "audio" | "podcast";

export interface Content {
    type: ContentType;
    data: string;
}
