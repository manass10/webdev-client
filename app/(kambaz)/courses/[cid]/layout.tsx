import { ReactNode } from "react";
import CourseNavigation from "./Navigation";

export default async function CourseLayout({
  children,
  params,
}: Readonly<{
  children: ReactNode;
  params: Promise<{ cid: string }>;
}>) {
  const { cid } = await params;

  return (
    <table>
      <tbody>
        <tr>
          <td valign="top" width="120px">
            <CourseNavigation cid={cid} />
          </td>
          <td valign="top">{children}</td>
        </tr>
      </tbody>
    </table>
  );
}
