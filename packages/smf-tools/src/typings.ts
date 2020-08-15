export type MicroFrontendManifestConfig = Record<string, MicroFrontendManifest>

export type MicroFrontendManifest = {
  name: string;
  target: string;
  cssassets: string;
  jsassets: string;
}

export type MOCK_Item = {
  id: number;
  Name: string;
  Rating: number;
  Delivery: boolean;
  Cost: number;
  Location: string;
  Picture: string;
}
