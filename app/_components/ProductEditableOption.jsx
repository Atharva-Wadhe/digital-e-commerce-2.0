import React from 'react'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
import { ChartLine, PenBox, Trash } from 'lucide-react'
import DeleteConfirmationDialog from './DeleteConfirmationDialog'
import axios from 'axios'

function ProductEditableOption({children,product}) {

  const DeleteProduct = async () => {
    // console.log(product);
    const result = await axios.delete('/api/products?productId='+product?.id)
    console.log(result);
    window.location.reload();
  }

  return (
    <Popover>
    <PopoverTrigger asChild>
        {children}
    </PopoverTrigger>
    <PopoverContent>
        <ul>
            <li className='flex gap-2 hover:bg-slate-100 p-2 rounded-md cursor-pointer'><PenBox/>Edit</li>
            <li className='flex gap-2 hover:bg-slate-100 p-2 rounded-md cursor-pointer'><ChartLine/>Analytics</li>
            <li className='flex gap-2 hover:bg-slate-100 p-2 rounded-md cursor-pointer text-red-600'>
              <DeleteConfirmationDialog DeleteProduct={DeleteProduct}>
                <h2 className='flex gap-2 p-2'>
                  <Trash/>Delete
                </h2>
              </DeleteConfirmationDialog>
              </li>
        </ul>
    </PopoverContent>
  </Popover>
  )
}

export default ProductEditableOption
