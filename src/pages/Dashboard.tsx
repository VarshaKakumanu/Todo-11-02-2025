import DOMPurify from 'dompurify';
import { useEffect, useState } from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import { Form } from './Form';
import List from './List';
import { useSelector } from 'react-redux';
// import { loggedIn } from "@/Redux/reducers/login";

// Define the data type for articles
interface Article {
  id: number;
  title: string;
  description: string;
  content: string;
}

export default function Dashboard() {


  return (
    <>

      <div>
Add your name here to TODO List
<Form />
TODO List
{" "}
   <List /> 
      </div>
    </>
  );
}