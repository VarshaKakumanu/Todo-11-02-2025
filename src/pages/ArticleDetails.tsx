import DOMPurify from "dompurify";
import { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "@/components/ui/card";
import { useNavigate, useParams } from "react-router-dom";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";

// Define the data types
interface Article {
  id: number;
  title: string;
  description: string;
  content: string;
}

export default function ArticleDetail() {


  return (
    <div className="flex flex-col md:flex-row md:justify-between m-2 p-2">
 Articles details
    </div>
  );
}